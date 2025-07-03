let i = 20;

do {
    if (i === 0) {
        console.log("LIFTOFF"); // 🚀 mensaje final
    } else if (i % 5 === 0) {
        console.log(i + "!"); // 🎯 múltiplo de 5
    } else {
        console.log(i); // número normal
    }
    i--; // va bajando desde 20 hasta 0
} while (i >= 0);
