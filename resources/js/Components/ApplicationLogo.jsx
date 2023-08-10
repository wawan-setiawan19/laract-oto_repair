export default function ApplicationLogo(props) {
    return (
        <div className="flex justify-center p-3 align-items-center rounded">
            {/* <img src={asset('logo.png')} alt="" /> */}
            <h1 className="text-5xl font-bold text-info-content">Bengkel<span className='text-red-800'>Go</span></h1>
        </div>
    );
}
