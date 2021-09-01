
import React, { Component } from "react";
import Chart from "react-apexcharts";

class Grafico extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["IªProva", "IIªProva", "Exame", "Recurso", "Recuperação"]
        }
      },
      series: [
        {
          name: "estudantes",
          data: [30, 40, 50, 40, 55],
        }
      ]
    };
  }

  render() {
    return (
      <div className="graphy">
        
            <Chart id="chart"
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="450"
             
            />
        
      </div>
    );
  }
}

export default Grafico;