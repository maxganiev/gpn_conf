<?php
require('config.php');

if (isset($_POST['dep']) && isset($_POST['arr'])) {
  $depart__param = $_POST['dep'];
  $arrival_param = $_POST['arr'];

  $query_distance = "SELECT DISTANCE FROM delivery_pricelist WHERE DEPARTURE like '$depart__param' AND ARRIVAL like '$arrival_param'";
  $query_rate = "SELECT RATE FROM delivery_pricelist WHERE DEPARTURE like '$depart__param' AND ARRIVAL like '$arrival_param'";

  //get result of quering:
  $res_distance = mysqli_query($connection, $query_distance);
  $distance = mysqli_fetch_all($res_distance, MYSQLI_ASSOC);

  $res_rate = mysqli_query($connection, $query_rate);
  $rate = mysqli_fetch_all($res_rate, MYSQLI_ASSOC);

  echo json_encode(array($distance[0], $rate[0]));

  //free res:
  mysqli_free_result($res_distance);
  mysqli_free_result($res_rate);

  //closing connection:
  mysqli_close($connection);
}
