import Client from './client';
import NestedServer from './nested-server';

export default function ClientServerMix() {
    console.log('MixMatchPage rendering');
    return (
        <div>
            <h1>Combined ClientServer</h1>
            <div className="box-blue">
                <Client message="A message from server">
                    <NestedServer />
                </Client>
            </div>
        </div>
    );
}
