(function() {
	var TTT = window.TTT = window.TTT || {};

	var qDuration=600;
	var qCounter=0;
	var quake = TTT.quake = function()
	{
	  // the horizontal displacement
	  var deltaX=1;
	  // make sure the browser support the moveBy method
	  if (window.moveBy)
	  {
	    for (qCounter=0; qCounter<qDuration; qCounter++)
	    {
	      // shake left
	      if ((qCounter%4)==0)
	      {
	        window.moveBy(deltaX, 0);
	      }
	      // shake right
	      else if ((qCounter%4)==2)
	      {
	        window.moveBy(-deltaX, 0);
	      }
	      // speed up or slow down every X cycles
	      if ((qCounter%30)==0)
	      {
	        // speed up halfway
	        if (qCounter<qDuration/2)
	        {
	          deltaX++;
	        }
	        // slow down after halfway of the duration
	        else
	        {
	          deltaX--;
	        }
	      }
	    }
		}
	}
})();