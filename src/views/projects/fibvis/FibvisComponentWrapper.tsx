import * as React from 'react';

const FibvisComponent = React.lazy(() => import('./FibvisComponent'));

export default function FibvisComponentWrapper() {
    return <React.Suspense fallback={<div>loading...</div>}>
        <FibvisComponent></FibvisComponent>
    </React.Suspense>;
}
