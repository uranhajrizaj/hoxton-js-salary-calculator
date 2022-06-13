let grossSalary = 500;
let pensionsContributions=0.05;
let taxableAmount= grossSalary - grossSalary*pensionsContributions;
const taxRateBetween0and80=0;
const taxRateBetween80and250=6.8; // (250-80)*4%=6.8
const taxRateBetween250and450=16; // (450-250)*8%=16
let taxRateOver450 = (taxableAmount-450)*0.1; 
let allTaxes=taxRateBetween0and80+taxRateBetween80and250+taxRateBetween250and450+taxRateOver450;
let netSalary=taxableAmount-allTaxes;
console.log(`Your gross salary is: `+ grossSalary+ ` Euro`+`. Your pensions contributions are: `+ grossSalary*pensionsContributions+ ` Euro`+ ` and your all taxes are: `+ allTaxes+ ` Euro.`+
` Finaly your net salary is: `+ netSalary+ ` Euro`);

// calculation net salary for every salary

// function grossSalary(x){
//     const taxRateBetween0and80=0;
//     const taxRateBetween80and250=6.8; 
//     const taxRateBetween250and450=16; 
//     let pensionsContributions=0.05;
//     let taxableAmount= x - x*pensionsContributions;
//     if (taxableAmount<=250 && taxableAmount>80){
//         return `Net slaray is:`+ (taxableAmount-(taxableAmount-80)*0.04)+` Euro`;
//     }
//     else if (taxableAmount<=450 && taxableAmount>250){
//         return `Net slaray is:`+ (taxableAmount-(taxableAmount-250)*0.08-taxRateBetween80and250)+` Euro`;
//     }
//     else if (taxableAmount>450){
//         return `Net slaray is:`+ (taxableAmount-(taxableAmount-450)*0.1-taxRateBetween80and250-taxRateBetween250and450)+` Euro`;
//     }    
// }
