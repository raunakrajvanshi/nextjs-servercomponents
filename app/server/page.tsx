export default function Server() {
    console.log(
        'Server page rendering: this should only be printed on the server'
    );
    return (
        <div>
            <h1>Server Page</h1>
            <p>My secret key: {process.env.SERVER_ENV}</p>
            <br></br>
            <p>Log in this component should be printed only on server</p>
        </div>
    );
}
