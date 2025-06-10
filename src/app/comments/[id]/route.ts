import { comment } from "../comment";

export async function GET(_request: Request,{params}:{params:Promise <{id:string}>}) {
   const { id } = await params;
    const foundComment = comment.find(c => c.id === id);
    if (!foundComment) {    
        return new Response(JSON.stringify({ error: "Comment not found" }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    return Response.json(foundComment, {        
        headers: {
            'Content-Type': 'application/json',
        },
    }); 

}
export async function PATCH( request: Request, {params}:{params:Promise<{id:string}>}) {
    const { id } = await params;
    const body= await request.json();
    const {content }= body;
    const index = comment.findIndex(c => c.id === id);

    comment[index].content = content;
    return new Response(JSON.stringify(comment[index]), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}