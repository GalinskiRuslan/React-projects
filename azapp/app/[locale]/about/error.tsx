'use client';

import React from 'react'

export default function Error({ error }: { error: Error }) {
    return (
        <div>Oops!!! {error.message}</div>
    )
}
