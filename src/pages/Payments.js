import React from 'react'

const Payments = () => {
    return (
        <div>payments
            <label class="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 ..">
                <svg fill="currentColor">
                </svg>
                Google Pay
                <input type="radio" class="checked:border-indigo-500 ..." />
            </label>
        </div>
    )
}

export default Payments