<?php
require('config.php');

if (isset($_POST['tonnage'])) {
  $tonnage__param = $_POST['tonnage'];

  $query_koeff = "SELECT koeff FROM tonnage WHERE tonn like '$tonnage__param'";

  //get result of quering:
  $res_koeff = mysqli_query($connection, $query_koeff);
  $koeff = mysqli_fetch_all($res_koeff, MYSQLI_ASSOC);

  echo json_encode($koeff[0]);

  //free res:
  mysqli_free_result($res_koeff);

  //closing connection:
  mysqli_close($connection);
}
