import BarChartComponent from '@/Components/Chart/BarChartComponent'
import LineChartComponent from '@/Components/Chart/LineChartComponent'
import PieChartComponent from '@/Components/Chart/PieChartComponent'
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";
import React from 'react'

const printDocument = () =>{
    const input = document.getElementById('printDocument');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'landscape',
            compress: true,
            format: 'legal'
        });
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // // pdf.output('dataurlnewwindow');
        // pdf.save("download.pdf");
        pdf.stream();
      })
    ;
}

const VisualisasiData = ({ dataLayanan }) => {
    const label = dataLayanan.map(data => data.kategori)
    const value = dataLayanan.map(data => data.count)
    let total = 0;
    dataLayanan.map(data => total += data.count);
    return (
        <>
            <div className="card-actions w-1/4 mb-3 justify-center align-bottom">
                {/* <a href={route('admin.export')} className="w-full btn btn-primary" target='_blank'>Export PDF</a> */}
                <button className="w-full btn btn-primary" onClick={printDocument}>Print</button>
            </div>
            <div id="printDocument">
            <h2 className="text-3xl">Report</h2>
            <div className="card w-96 md-3">
                <div className="card-body">
                    <h2 className="card-title">Total Layanan Kami</h2>
                    <p>{total}</p>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="card w-full md:w-1/2 lg:w-1/3 p-4">
                    <h2 className="card-title text-2xl w-2/3">Persentase Layanan</h2>
                    <PieChartComponent label={label} value={value} title="Layanan" />
                </div>
                <div className="card w-full md:w-1/2 lg:w-1/3 p-4">
                    <h2 className="card-title text-2xl w-2/3">Jumlah Layanan</h2>
                    <BarChartComponent label={label} value={value} data={dataLayanan} title="Layanan" />
                </div>
                <div className="card w-full md:w-1/2 lg:w-1/3 p-4">
                    <h2 className="card-title text-2xl w-2/3">Jumlah Layanan</h2>
                    <LineChartComponent label={label} value={value} data={dataLayanan} title="Layanan" />
                </div>
            </div>
            </div>
        </>
    )
}

export default VisualisasiData