import { comment } from "./comment";
import { type NextRequest } from "next/server";
export async function GET(request:NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    const filteredComments = query?
        comment.filter(c => c.content.toLowerCase().includes(query.toLowerCase())) :
        comment;
    return Response.json(filteredComments, {
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