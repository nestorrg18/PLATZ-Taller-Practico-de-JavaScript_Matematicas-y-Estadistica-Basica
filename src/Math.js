class PlatziMath {
    static square(side) {
        const perimeter = side * 4;
        const area = side ** 2;
        const result = `Square side: ${side} | perimeter: ${perimeter}, area: ${area}`;
        console.log(result);
    }
    static triangle(side1, side2, side3) {
        const perimeter = side1 + side2 + side3;
        // Heron formula
        const S = perimeter / 2;
        const area = Math.sqrt(S*(S - side1)*(S - side2)*(S - side3))
    
        const result = `Triangle sides: ${side1}, ${side2}, ${side3},  | perimeter: ${perimeter}, area: ${area}`;
        console.log(result);
    }
    static circle(radio) {
        const perimeter = 2 * radio * Math.PI;
        const area = (radio ** 2) * Math.PI;
    
        const result = `Circle radio: ${radio} | perimeter: ${perimeter}, area: ${area}`;
        console.log(result);
    }
    static isocelesTriangleHeight(side1, base) {
        if (side1 == base) {
            console.warn('Este no es un triangulo isósceles no equilatero');
        } else {
            const height = Math.sqrt( (side1 ** 2) - ( (base ** 2) / 4) )
        
            const result = `Triangle side1: ${side1}, Triangle base: ${base} | height: ${height}`;
            console.log(result);
        }
    }
    static scalaneTriangleheight(side1, side2, side3) {
        if (side1 == side2 || side1 == side3 || side2 == side3) {
            console.warn('Este no es un triangulo escaleno');
        } else {
            // Heron formula
            const perimeter = side1 + side2 + side3;
            const S = perimeter / 2;
            const heightSide1 = (2 / side1) * (Math.sqrt( S * (S - side1) * (S - side2) * (S - side3) ) );
            const heightSide2 = (2 / side2) * (Math.sqrt( S * (S - side1) * (S - side2) * (S - side3) ) );
            const heightSide3 = (2 / side3) * (Math.sqrt( S * (S - side1) * (S - side2) * (S - side3) ) );
        
            const result = `Triangle sides: ${side1}, ${side2}, ${side3},  | height Side1: ${heightSide1}, height Side2: ${heightSide2}, height Side3: ${heightSide3},`
            console.log(result);
        }
    }
     // clase 5: Playground (Calcula la Altura de un Triángulo Escaleno)
    static playground1(side1, side2, side3) {
        if (side1 == side2 || side1 == side3 || side2 == side3) {
            return false
        } else {
            const S = (side1 + side2 + side3) / 2;
            const height = Math.floor((2 / side1) * (Math.sqrt( S * (S - side1) * (S - side2) * (S - side3) ) ));
            return height
        }
    }
    static percentage(originalPrice, discount) {
        const newPrice = (originalPrice * (100 - discount)) / 100;
        
        const result = `Original amount: ${originalPrice}, discount: %${discount} | New price: ${newPrice}`
        return result
    }
    
    static average(array) {
        const sum = array.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        )
        const average = sum / array.length
        return average
    }
    static isEven = array => array.length % 2 == 0 ? true : false
    static mediana(array) {
        let median
        const arrayB  = array.sort((a, b) => a - b);
        
        if (PlatziMath.isEven(array)) {
            const index1 = arrayB.length / 2;
            const index2 = (arrayB.length / 2) - 1;
            const list = [arrayB[index1], arrayB[index2]]
            median = PlatziMath.average(list)
        } else {
            const indexMediana = Math.floor(arrayB.length / 2);
            median = arrayB[indexMediana]
        }
        return median
    }
    static  mode(array) {

        const frecuency = {};
    
        array.forEach(number => {
            frecuency[number] = (frecuency[number] || 0) + 1;
        });
    
        console.log(frecuency);
        let mode = [];
        let maxFrecuency = 0;
        for (const num in frecuency) {
            if (frecuency[num] > maxFrecuency) {
                mode = [parseInt(num)];
                maxFrecuency = frecuency[num]
            } else if(frecuency[num] === maxFrecuency) {
                mode.push(parseInt(num));
            }
        }
        console.log(mode);
        return mode
    }
}