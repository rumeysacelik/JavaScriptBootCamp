export class BaseLogger{
    log(data){
<<<<<<< HEAD
        console.log("Default logger:"+data)
=======
        console.log("Default logger : " + data)
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
<<<<<<< HEAD
        console.log("Logged to Elastic"+data);
    
=======
        console.log("Logged to Elastic" + data)
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
<<<<<<< HEAD
        console.log("Logged to Mongo"+data);
    }
}
=======
        console.log("Logged to Mongo" + data)
    }
}

>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
