<?php 
  require_once '../database.php';
  $db = new DatabaseOperations('127.0.0.1', 'root', 'root', 'bookstash', 8889);
  $categories = $db->read('categories');
  //$alphabetical_order = $db->sort('book', 'name');
  $books = $db->read('book');

  //$_GET['']

?>


<div>
  <div>
    <h3>Filter</h3>
    <ul>
       <li><a href='?filter=latest'>Latest</a></li>  
       <li><a href='?filter=oldest'>Oldest</a></li>  
       <li><a href='?filter=az'>A-Z</a></li>  
       <li><a href='?filter=author'>Author</a></li> 
       <li><a href='?filter=popularity'>Popularity</a></li>  
    </ul>    
    </div>
    <div>
    <h3>Categories</h3>
    <ul>
        <?php 
            while($row = $categories->fetch_row()){
               echo "<li><a href='/?id={$row[0]}'>{$row[1]}</a></li>";
            }
        ?>
    </ul>    
    </div>
</div>