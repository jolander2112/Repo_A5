
// Jason Olander
// Foundation 1, September 2014
// Assignment 05, Sorting

$(function(){

	// Fill band list at startup
	for (var i = 0; i < bandList.length; i++) {
		
    str = '<li name="' + bandList[i].name + '" year="' + bandList[i].year + '" genre="' + bandList[i].genre + '" class=band>' + bandList[i].name + ', ' + bandList[i].genre + ', ' + bandList[i].year + '</li>';
		$('ul').append(str);
	}

  // A sort button was clicked 
  $('.sort').on('click', function() {
    sortBy = $(this).attr('id');  // Get sort attribute
    insertionSort(sortBy, 0, 0);  // Call insertion sort with sort attribute
  })

  // Shuffle button clicked
  $('#shuffle').on('click', function(){
    shuffle( $('.band').length - 1);
  })

  // InsertionSort. Modified basic insertion sort algorithm
  function insertionSort(id, i, j){    
    
    // Set list reference and remove any active swapping effects
    $sortList = $('li');
    $sortList.removeClass('swapping');
    
    // Set source and target data to compare
    source = $('.band').eq(i).attr(id);
    target = $('.band').eq(j).attr(id);
    
    // If the value of the target data is higher than the source, 
    // insert the source element before the target in the list
    if (target > source){
      
      // Set target and source references
      $target = $('.band').eq(j);
      $source = $('.band').eq(i);
      
      // Set each to display effects
      $target.addClass('swapping');
      $source.addClass('swapping');

      // Insert the source element before the target in the list
      $target.before($source);
      
      // Successful insertion, restart the search with a delay
      setTimeout(function(){insertionSort(id, 0, 0)}, 250);
    }
    else {        // No hits on value comparisons

      j = j - 1;  // Decrement target count

      // Continue comparing values to the target,
      // or move to the next source element data
      if (i < $sortList.length) {
        if ( j >= 0 ) {
          insertionSort(id, i, j);
        }
        else{
          i = i + 1;  // Increment source count
          j = i - 1;  // Reset target count
          insertionSort(id, i, j);
        }
      }
    }
  }

  // Shuffle band list (thanks Brook) 
  function shuffle(m) {
    
    var $m;
    var rand = Math.floor(Math.random() * m);
    var $rand;

    $('li').removeClass('swapping');

    $mth = $('.band:eq(' + m + ')')
      .addClass('swapping');
    $rand = $('.band:eq(' + rand + ')')
      .addClass('swapping');

    $mth.before($rand);
    $('.band:eq(' + rand + ')').before($mth);

    if (m > 0) {
      setTimeout(shuffle, 200, m - 1);
    } else {
      $('li').removeClass('swapping');
    };
  }
      
})