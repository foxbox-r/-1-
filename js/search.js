// nodetype : https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
// node.type
// node.name
// node.childNodes

// 할수 있는 것들 단체 정보수집 or 단체 정보 조작

function search(target){
    if(target.nodeType === 1){
        if(target.nodeName === "IMG")
            console.log(target.src);
        var arr = target.childNodes;
        for(var i=0;i<arr.length;i++){
            search(arr[i]);
        }    
    }
}