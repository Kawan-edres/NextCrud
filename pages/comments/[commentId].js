import {comments} from "../../data/comments";
function Comment({coment}){

    return(
        <div>
            {coment.id}. {coment.text}
        </div>
    )
}

export default Comment;

export async function getStaticPath(){
    return{
        paths:[
            {params:{commentId:'1'}},
            {params:{commentId:'2'}},
            {params:{commentId:'3'}},

        ],
        fallback:false
    }
}

export async function getStaticProps(context){
    const {commentId} = context.params;//away from the url
    const comment = comments.find(comment => comment.id === parseInt(commentId));
    return{
        props:{
            comment
        }
    }
    

}