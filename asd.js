let arr= [1,2,3,4,5]


    for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    }
    let x = arr[2]
    arr.pop(2)
    arr.push(x)
    var z=0
    for (var i = 0; i < arr.length; i++) {
    z++}

    console.log(z);
    console.log(arr[z]);