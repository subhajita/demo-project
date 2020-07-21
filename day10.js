function maxelement(arr)
{      
    var rows = 3; 
    var column =4; 
    for(var i=0;i<rows;i++)
    { 
        var max1 = arr[i][0];
        for(var j=0;j<column;j++)
        { 
            if(arr[i][j] > max1) 
                max1 = arr[i][j]; 
        }         
        console.log(max1); 
    }
}  
arr = [[1,2,3], [1, 4, 9], [76, 34, 21]];       
maxelement(arr);
arr= [[1,2,3,21],[12,1,65,9],[1,56,34,2]];
maxelement(arr);