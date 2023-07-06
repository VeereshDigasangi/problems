class Graph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex])
            this.adjacencyList[vertex]=[]
    }
    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }
    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1]= this.adjacencyList[vertex1].filter(vertex=>vertex!==vertex2)
            this.adjacencyList[vertex2]= this.adjacencyList[vertex2].filter(vertex=>vertex!==vertex1)
        }
    }
    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            this.adjacencyList[vertex].forEach(vertex2=>this.removeEdge(vertex,vertex2))
            delete this.adjacencyList[vertex]
        }
    }
    depthFirstSearchRecursive(start){
        const result=[],
        visited={};
        const adjacencyList= this.adjacencyList
        function dfs(vertex) {
            if(!vertex)
                return null;
            result.push(vertex);
            visited[vertex]=true;
            adjacencyList[vertex].forEach(neighbor=>{
            if(!visited[neighbor])
                return dfs(neighbor)
            })
        }
        dfs(start);
        return result;
    }

    depthFirstSearchIterative(start){
        const result=[],
        stack=[start],
        visited={};
        let currentVertex;

        visited[start]=true
        while(stack.length){
            currentVertex= stack.pop();
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor]=true;
                    stack.push(neighbor)
                }
            })

        }
        return result;
    }

    breadthFirstSearchIterative(start){
        const result=[],
        queue=[start],
        visited={};
        let currentVertex;

        visited[start]=true
        while(queue.length){
            currentVertex= queue.shift();
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor]=true;
                    queue.push(neighbor)
                }
            })

        }
        return result;
    }
}


const g= new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A","B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log("recursive",g.depthFirstSearchRecursive("A"));
console.log("iterative ",g.depthFirstSearchIterative("A"));
console.log("bfs ",g.breadthFirstSearchIterative("A"));
console.log(g);



/**
            A
          /    \
         B      C
         |      | 
         D -- - E
          \    /
            F 
 */

        