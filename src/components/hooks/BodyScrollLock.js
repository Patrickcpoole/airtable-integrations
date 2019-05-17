import { useLayoutEffect } from 'react';

function useBodyScrollLock() {
    useLayoutEffect(() => {
        document.body.style.hidden = 'hidden';
    })
}

export {useBodyScrollLock};