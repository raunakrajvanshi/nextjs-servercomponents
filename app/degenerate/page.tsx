import Client from './client';

export default function DegeneratePage() {
    console.log('Degenerated page rendering');
    return (
        <div>
            <h1>Degenerate Server Page</h1>
            <div className="box-blue">
                <Client message="A message from server" />
            </div>
        </div>
    );
}
