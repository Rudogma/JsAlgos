
/**
 * @author Rudogma(mihail.savinov@gmail.com)
 */

var levenshtein = (function(){

	var levenshteinImpl = function(s1, s2, col, colIndex){
		if(colIndex > s1.length){
		  return col[col.length-1];
		}else{
		  var newCol = [colIndex];

		  for(var i=1; i<col.length; i++){
			var m = (s1[colIndex-1] == s2[i-1]) ? 0 : (
			  (colIndex > 1 && i > 1 && s1[colIndex-2] == s2[i-1] && s1[colIndex-1] == s2[i-2]) ? 0 : 1
			);

			newCol[i] = Math.min (
				col[i]+1,
				  Math.min(
					newCol[i-1]+1,
					col[i-1] + m
				  )
			  );
		  }

		  return levenshteinImpl(s1, s2, newCol, colIndex + 1);
		}
	};
	
	return function(s1, s2, a){
		var arr = [];
		for(var i=0; i<=s2.length; i++){ arr[i]=i; }
		
		return levenshteinImpl(s1, s2, arr, 1)
	};
	
})();

