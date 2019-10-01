import { data } from "components/redux-js/constants/constants";

// const mapStateToProps = (state) => {
//   return { articles: state.articles };
// };
// class Calculation extends Component {
//   state = {};
//   render() {
//     return null;
//   }
//   cal() {
//     console.log("i am in calculation");
//     return "i am in calculation action class";
//   }
// }

const Calculation = (data: data) => {
  var result: number = 0;
  // var int1 = data.int1;
  console.log(data.int1);
  console.log(data.int2);
  console.log(data.operator);
  switch (data.operator) {
    case "+":
      result = data.int1 + data.int2;
      break;
    case "-":
      result = data.int1 - data.int2;
      break;
    case "x":
      result = data.int1 * data.int2;
      break;
    case "/":
      result = data.int1 / data.int2;
      break;
    case "%":
      result = data.int1 / 100;
      break;
    default:
      return "sorry";
  }
  return result;
  // return "i am in calulation";
};
export default Calculation;
