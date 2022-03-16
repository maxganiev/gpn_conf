<?php
require('config.php');

//table names to choose before upload:
//delivery_pricelist
//truck_type 
//tonnage

define('DATA_TABLE', 'tonnage');

//creating a query to get data from certain table in db:
$query = 'SELECT * FROM ' . DATA_TABLE;

//get result of quering:
$res = mysqli_query($connection, $query);


$data = mysqli_fetch_all($res, MYSQLI_ASSOC);


$printMsg = [];

if ($_FILES['fileupload']['name'] !== '') {
  if (count($data) !== 0) {
    $removal =  'DELETE FROM  ' . DATA_TABLE;

    if (mysqli_query($connection, $removal)) {
      $printMsg[] = 'Table successfully updated';
    } else {
      $printMsg[] = 'A problem has occured while updating the table';
    }
  }

  $file = $_FILES['fileupload']['tmp_name'];
  $file_open = fopen($file, 'r');
  while (($csv = fgetcsv($file_open, 1000, ';')) !== false) {
    // $dep = $csv[0];
    // $arrival = $csv[1];
    // $distance = $csv[2];
    // $region = $csv[3];
    // $rate = $csv[4];

    // $truck_type = $csv[0];
    // $koeff = $csv[1];

    $tonn = $csv[0];
    $koeff = $csv[1];

    $data_table = DATA_TABLE;
    // $req =  mysqli_query($connection,  "INSERT INTO $data_table VALUES ('$dep','$arrival', '$distance', '$region', '$rate')");
    //$req =  mysqli_query($connection,  "INSERT INTO $data_table VALUES ('$truck_type','$koeff')");
    $req =  mysqli_query($connection,  "INSERT INTO $data_table VALUES ('$tonn','$koeff')");
  }



  if ($req) {
    $printMsg[] = 'File has been successfully uploaded to db';
  } else {
    $printMsg[] = 'Connection failed';
  }
} else {
  $printMsg[] = 'Append the file!';
}


$encoded = '';
foreach ($printMsg as $msg) {
  $encoded = $encoded  .  $msg . '. ';
}

echo json_encode($encoded);




//free res:
mysqli_free_result($res);

//closing connection:
mysqli_close($connection);
