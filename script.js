

function myfunc()
{
    let task = document.getElementById("task").value;
    let desc = document.getElementById("desc").value;    
    let arr = [];
    if(!localStorage.getItem('deets'))
    {   
        arr.push([task,desc]);
        localStorage.setItem('deets',JSON.stringify(arr));
    }
    else
    {
        let array = JSON.parse(localStorage.getItem('deets'));
        arr.push(task,desc);
        array.push(arr);
        let str = JSON.stringify(array);
        localStorage.setItem('deets',str);
    }
    addToTable();    
}

function addToTable()
{
    let mytable = document.querySelector('table');
    let arr = JSON.parse(localStorage.getItem('deets'));
    let i = arr.length-1;
    mytable.innerHTML += "<tr><td>"+(i+1)+"</td><td>"+arr[i][0]+"</td><td>"+arr[i][1]+"</td><td><button onclick='deleted("+i+")'>Delete Task</button></td></tr>";
}

display();

function display()
{
    let mytable = document.querySelector('table');
    let arr = JSON.parse(localStorage.getItem('deets'));

    for(let i=0;i<arr.length;i++)
    {
        mytable.innerHTML += "<tr><td>"+(i+1)+"</tf><td>"+arr[i][0]+"</td><td>"+arr[i][1]+"</td><td><button onclick='deleted("+i+")'>Delete Task</button></td></tr>";
    }
}

function deleted(i)
{
    const arr = JSON.parse(localStorage.getItem('deets'));
    arr.splice(i,1);
    localStorage.setItem('deets',JSON.stringify(arr));
    location.reload();
}


