//This is the Page for the contact

//This is the server action - this is a costum method for Next.js
async function requestName(formData){
    "use server";
    const name = formData.get("name");
    console.log(name);

}

export default function Page(){
    return (
        <form action={requestName}>
            <input type="text" name="name" id="name" />
            <button typer="submit">Request Name</button>
        </form>
    );
}