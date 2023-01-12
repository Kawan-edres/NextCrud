import {comments} from "../../../data/comments"
export default function handler(req,res){
    const {commentId} = req.query;//away from the url   
    if(req.method === 'GET'){
    const comment = comments.find(comment => comment.id === parseInt(commentId));
    res.status(200).json(comment);
    }

    else if(req.method === 'DELETE'){
        // const deletedComment=comments.find(comment => comment.id === parseInt(commentId));  
        const index =comments.findIndex(comment => comment.id === parseInt(commentId));
        comments.splice(index,1);//at position index delete 1 element

        res.status(200).json(index);
}
    else if(req.method === 'PUT'){
        const index =comments.findIndex(comment => comment.id === parseInt(commentId));
        comments[index].text = "hi there";
        res.status(200).json(comments[index]);
    }



}