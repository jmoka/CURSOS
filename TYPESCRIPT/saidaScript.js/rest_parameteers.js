"use strict";
const rest_parameter = ((...rest_parameter) => {
    return rest_parameter.reduce((soma, itens) => soma + itens, 0);
});
console.log(rest_parameter(1, 3, 8));
//# sourceMappingURL=rest_parameteers.js.map