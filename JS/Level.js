class Level{
    constructor(arr){
       this.data = arr;
    
       this.gapBetween =gb
       this.paths=this.data
       this.t=new tiles
    //  var d= this.data
    //    var graph = new Graph(
    //    d
    // );
    // console.log("grid "+graph.grid)
    // var start = graph.grid[0][9];
    // var end = graph.grid[10][1];
    // this.result = astar.search(graph, start, end);
    // console.log("result "+this.result)
    
    //this.highlight(result[0].x, result[0].y)
       // this.data=arr;
    
    }
    display(){
        var arr=this.data
        var gapBetween=this.gapBetween
        for(var i=0; i<arr.length;i++){
            for(var j=0; j<arr[i].length;j++){
                var n=getNeighbor(arr,i,j)
               switch (arr[i][j]) {
                   case (10):
                       this.t.wall1( gapBetween *(j+1),gapBetween*(i+1),n)
                       break;
                    case (11):
                        this.t.wall2( gapBetween *(j+1),gapBetween*(i+1),n)
                        break;
                    case (12):
                        this.t.wall3( gapBetween *(j+1),gapBetween*(i+1),n)
                        break;
                    case (13):
                        this.t.wall4( gapBetween *(j+1),gapBetween*(i+1),n)
                        break;
                    case(1):
                        this.t.ground1( gapBetween *(j+1),gapBetween*(i+1),n)
                        break;
                    case(2):
                        this.t.ground2( gapBetween *(j+1),gapBetween*(i+1),n)
                        break;
                   default:
                       break;
               }

            }
        }
     //this.dtod();
      // this.highlight(mouseX, mouseY,true)
      }
    
    highlightPath(){ 
        if(this.result!=[])
                {var r=this.result
                this.highlight(1,3,false)
            for (let i = 0; i < r.length; i++) {
                this.highlight(r[i].y, r[i].x,false)
                // console.log(r[i].x, r[i].y,false)
                //this.highlight(1,i,false)
            }
         }
    }
    highlight(x,y,mouse=false) {
        
        var gapBetween=this.gapBetween,ax,ay,d=this.data
        if(mouse==true) 
        {// x+=gapBetween/2;y+=gapBetween/2;
        x=mouseX + gapBetween/2,y=mouseY+ gapBetween/2
         if(mouse&&x>gapBetween*d[0].length+2||y>gapBetween*d.length+1||x<gapBetween||y<gapBetween){
             return;
         }
 
          ax=int(map(x,gapBetween,gapBetween*d[0].length,1,d[0].length,true))
          ay=int(map(y,gapBetween,gapBetween*d.length,1,d.length,true))
        //   this.path(ay,ax)
        }
        else if(!mouse){ 
            ax=x+1;ay=y+1;
        }
        if(keyDown=="SPACE"){
            console.log("ax: "+ax,"ay: "+ay)
        }
         push()
         rectMode(CENTER)     
         fill(255,200,0,100)
        strokeWeight(gapBetween*0.08)
         stroke("#A7FF0A");
        ellipse(ax*gapBetween,ay*gapBetween,gapBetween,gapBetween,20)
         rect(ax*gapBetween,ay*gapBetween,gapBetween,gapBetween,20)
         pop()
        
     }
     update(){

     }
    path(x,y){
        var d= this.data
        var graph = new Graph(
        tp(this.data)
     );

     console.log("grid "+graph.grid,"x:"+x,"y: "+y)
     var start = graph.grid[0][9];
     var end = graph.grid[x][y];
     this.result = astar.search(graph, start, end);
    }
    dtod(){
        var arr=this.paths
       for (let i = 0; i < arr.length; i++) {
           for (let j = 0; j < arr[i].length; j++) {
               if(this.paths[i][j]<10){this.paths[i][j]=1}
           }
       }
    }
}

function gi(x,y,mouse=true){
    var gapBetween=gb
    var d=level.data
    if(mouse==true) 
    {// x+=gapBetween/2;y+=gapBetween/2;
    x=mouseX + gapBetween/2,y=mouseY+ gapBetween/2
     if(mouse&&x>gapBetween*d[0].length+2||y>gapBetween*d.length+1||x<gapBetween||y<gapBetween){
         
     }
      if(mouseX>gapBetween*d[0].length)return
      ax=int(map(x,gapBetween,gapBetween*d[0].length,1,d[0].length,true))
      ay=int(map(y,gapBetween,gapBetween*d.length,1,d.length,true))
  
    }
    ax--;ay--
    var a={x:ax,y:ay};
    return a;
}
function tp(){ 
    
    
}
function getNeighbor(data,i,j){ 
    var val =data[i][j];
    var arr=data
    var sides={t:0,b:0,l:0,r:0}
    if(i!=0){
    if(arr[i- 1][j]==val)sides.t=1;
    }
    if(i<data.length-1){
        //console.log(arr[i+1][j],i,j)
    if(arr[i+1][j]==val)sides.b=1;
    }
    if(j!=0){
    if(arr[i][j-1]==val)sides.l=1;
    }

    if(j!=arr[i].length){
    if(arr[i][j+1]==val)sides.r=1
    }
    return sides;
}
