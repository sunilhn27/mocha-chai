class Calculator {


    add(a: number, b: number): number {
        return a + b;
    }


    sub(a: number, b: number): number {
        return a - b;
    }

    mul(a: number, b: number): number {
        return a * b;
    }

    div(a: number, b: number): number {
        if (b == 0 ||a ==0) {
            throw new Error("Zero cannot be divided")
        }
        return a / b;
    }

    asyncFunction() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(5);
            }, 1000);
        });
    }
    


}

export default Calculator;