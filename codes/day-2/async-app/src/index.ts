/*
const divide = function (a: number, b: number): Promise<number> {
    const p = new Promise<number>(
        //executor function
        function (resolveFn, rejectFn) {
            const res = a / b
            if (res == Infinity) {
                const err = new Error('the divsior should not be zero...')
                rejectFn(err)
            }
            resolveFn(res)
        }
    );
    return p;
}
*/
const divide = async function (a: number, b: number): Promise<number> {
    const res = a / b
    if (res == Infinity) {
        throw new Error('the divsior should not be zero...')
    }
    return res
}
const add = function (a: number, b: number) {
    return a + b
}

/*
const promiseDivide: Promise<number> = divide(12, 3)
promiseDivide
    .then(
        function (data: number) {
            console.log(data)
        },
        function (err: Error) {
            console.log(err)
        }
    )
*/

async function callDivide() {
    try {
        const data = await divide(12, 3)
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}

callDivide()

setTimeout(
    function () { console.log('set time out code') }
)

let result = add(12, 3)
console.log(result)
console.log('all done....')

