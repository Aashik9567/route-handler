import { comment } from "./comment";

export async function GET(){
    return Response.json(comment, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
export async function POST(request: Request) {
    const Comment =await request.json();
    const newComment = {
        id: (comment.length + 1).toString(),
        content: Comment.content,
    };
    comment.push(newComment);
    return new Response(JSON.stringify(comment), {
        status: 201,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}