<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div className="flex flex-wrap">
             <div className="card w-full md:w-1/2 lg:w-1/3">
                 <h2 className="card-title text-2xl w-2/3">Layanan yang dimiliki</h2>
                 <PieChartComponent label={label} value={value} title="Layanan yang dimiliki"/>
             </div>
             <div className="card w-full md:w-1/2 lg:w-1/3">
                 <h2 className="card-title text-2xl w-2/3">Layanan yang dimiliki</h2>
                 <BarChartComponent label={label} value={value} data={dataLayanan} title="Layanan yang dimiliki"/>
             </div>
         </div>
</body>
</html>