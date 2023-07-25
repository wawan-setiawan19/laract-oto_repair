import { Link } from '@inertiajs/react'
import React from 'react'

const MenuServis = () => {
    return (
        <div className="h-fit bg-blue-100 rounded shadow-xl image-full rounded-none p-3 md:px-20">
            <div className="flex flex-col gap-10">
                <div className="flex justify-between w-full">
                    <div className="card bg-warning shadow-xl p-5 font-bold items-center">
                        Point 10.000
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl w-2/4 p-2">
                        <figure><img className='h-10 mr-2 rounded' src="https://picsum.photos/400" alt="Movie" /></figure>
                        <p>Lengkapi data mobil</p>
                    </div>
                </div>
                <div className="flex flex-wrap flex-1 gap-10 justify-start md:justify-between">
                    <Link href={route('order')} className="flex flex-col items-center">
                        <svg className='h-20 w-20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z" /><path d="M9.07 7L6 11.606V20h12V7H9.07zM8 5h11a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11l4-6zm5-4h5a1 1 0 0 1 1 1v2h-7V2a1 1 0 0 1 1-1zM8 12h2v6H8v-6z" /></g></svg>
                        <span>Oli</span>
                    </Link>
                    <Link href={route('order')} className="flex flex-col items-center">
                        <svg fill="currentColor" className='h-20 w-20' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.009 512.009" xml:space="preserve"><g><g><g><path d="M277.337,256.007c11.776,0,21.333-9.557,21.333-21.333s-9.557-21.333-21.333-21.333s-21.333,9.557-21.333,21.333S265.561,256.007,277.337,256.007z" /><path d="M277.337,298.674c-11.776,0-21.333,9.557-21.333,21.333s9.557,21.333,21.333,21.333s21.333-9.557,21.333-21.333S289.113,298.674,277.337,298.674z" /><path d="M277.337,149.34c-70.683,0-128,57.317-128,128s57.317,128,128,128s128-57.317,128-128S348.02,149.34,277.337,149.34zM277.337,362.674c-47.119,0-85.333-38.214-85.333-85.333s38.214-85.333,85.333-85.333s85.333,38.214,85.333,85.333S324.456,362.674,277.337,362.674z" /><path d="M307.08,44.344V33.679c0-19.406-16.295-34.56-35.517-33.64C124.746,7.211,7.202,124.762,0.054,271.554c-0.98,19.189,14.2,35.512,33.617,35.512h10.664c14.711,115.872,113.645,204.943,232.869,204.943c129.674,0,234.795-105.128,234.795-234.816C511.999,157.967,422.95,59.046,307.08,44.344z M264.405,43.281v42.914c-5.207,0.546-10.35,1.299-15.427,2.23c-60.921,11.163-111.992,49.574-140.217,102.267c-11.965,22.334-19.826,47.232-22.597,73.707H43.296C53.479,146.906,146.943,53.453,264.405,43.281z M277.205,469.342c-95.683,0-175.418-70.121-189.795-162.261h7.075c12.207,0,23.097-6.537,28.984-16.465c2.605-4.383,4.237-9.426,4.564-14.865c1.85-30.291,12.134-58.188,28.543-81.408c22.705-32.124,57.14-55.289,97.251-63.412c7.144-1.445,14.467-2.413,21.935-2.87c4.989-0.3,9.65-1.697,13.773-3.941c0.072-0.039,0.141-0.082,0.212-0.122c0.383-0.212,0.764-0.427,1.137-0.654c0.252-0.153,0.497-0.317,0.745-0.476c0.188-0.121,0.38-0.237,0.565-0.361c0.316-0.212,0.623-0.435,0.931-0.658c0.111-0.081,0.227-0.156,0.337-0.238c0.316-0.235,0.623-0.48,0.93-0.725c0.097-0.077,0.197-0.15,0.293-0.229c0.258-0.211,0.506-0.431,0.757-0.649c0.139-0.121,0.283-0.237,0.42-0.36c0.147-0.132,0.286-0.27,0.43-0.405c6.661-6.195,10.787-15.058,10.787-24.742v-7.085c92.143,14.361,162.253,94.086,162.253,189.778C469.333,383.317,383.314,469.342,277.205,469.342z" /><path d="M234.67,256.007c-11.776,0-21.333,9.557-21.333,21.333s9.557,21.333,21.333,21.333s21.333-9.557,21.333-21.333S246.446,256.007,234.67,256.007z" /><path d="M320.004,256.007c-11.776,0-21.333,9.557-21.333,21.333s9.557,21.333,21.333,21.333s21.333-9.557,21.333-21.333S331.78,256.007,320.004,256.007z" /></g></g></g></svg>
                        <span>Rem</span>
                    </Link>
                    <Link href={route('order')} className="flex flex-col items-center">
                        <svg className='h-20 w-20' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12M22 12C22 6.47715 17.5228 2 12 2M22 12H19.5M2 12C2 6.47715 6.47715 2 12 2M2 12H4.5M12 2V4.5M19.0784 5L13.4999 10.5M19.0784 19.0784L18.8745 18.8745C18.1827 18.1827 17.8368 17.8368 17.4331 17.5894C17.0753 17.3701 16.6851 17.2085 16.2769 17.1105C15.8166 17 15.3274 17 14.349 17L9.65096 17C8.6726 17 8.18342 17 7.72307 17.1106C7.31493 17.2086 6.92475 17.3702 6.56686 17.5895C6.1632 17.8369 5.8173 18.1828 5.12549 18.8746L4.92163 19.0784M4.92163 5L6.65808 6.73645M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        <span>Berkala</span>
                    </Link>
                    <Link href={route('order')} className="flex flex-col items-center">
                        <svg fill="currentColor" className='h-20 w-20' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g><g><g><path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333z" /><path d="M376.679,135.32C376.679,135.319,376.679,135.319,376.679,135.32C376.678,135.319,376.678,135.319,376.679,135.32C345.794,104.435,303.128,85.333,256,85.333c-94.257,0-170.667,76.41-170.667,170.667S161.743,426.667,256,426.667c47.128,0,89.794-19.102,120.678-49.986c0,0,0,0,0,0c0,0,0,0,0,0c30.885-30.885,49.988-73.552,49.988-120.68S407.564,166.204,376.679,135.32z M360.334,330.167l-30.83-30.83c4.012-6.79,7.125-14.174,9.14-22.004h43.575C378.957,296.781,371.317,314.745,360.334,330.167z M129.78,277.333h43.575c2.015,7.829,5.128,15.213,9.14,22.002l-30.83,30.83C140.683,314.744,133.043,296.781,129.78,277.333z M151.665,181.835l30.83,30.83c-4.011,6.79-7.125,14.173-9.14,22.002H129.78C133.043,215.219,140.683,197.256,151.665,181.835z M256,298.667c-11.772,0-22.429-4.766-30.148-12.474c-0.007-0.008-0.014-0.016-0.021-0.023s-0.016-0.014-0.023-0.021c-7.708-7.719-12.474-18.376-12.474-30.148s4.766-22.429,12.474-30.148c0.008-0.007,0.016-0.014,0.023-0.021s0.014-0.016,0.021-0.023c7.719-7.708,18.376-12.474,30.148-12.474c23.567,0,42.667,19.099,42.667,42.667S279.567,298.667,256,298.667z M299.334,182.494c-6.789-4.011-14.173-7.124-22.001-9.139V129.78c19.447,3.263,37.409,10.903,52.831,21.884L299.334,182.494z M234.667,173.355c-7.829,2.015-15.213,5.128-22.002,9.14l-30.83-30.83c15.422-10.982,33.385-18.622,52.832-21.885V173.355z M212.664,329.506c6.79,4.011,14.173,7.125,22.002,9.14v43.575c-19.447-3.263-37.41-10.903-52.832-21.885L212.664,329.506z M277.333,338.645c7.828-2.015,15.212-5.128,22.001-9.139l30.83,30.83c-15.421,10.982-33.384,18.621-52.831,21.884V338.645z M338.645,234.667c-2.015-7.829-5.128-15.214-9.14-22.004l30.83-30.83c10.983,15.422,18.623,33.385,21.886,52.833H338.645z" /></g></g></g></svg>
                        <span>Ban</span>
                    </Link>
                    <Link href={route('order')} className="flex flex-col items-center">
                        <svg fill="currentColor" className='h-20 w-20' viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" id="car-repair"><path d="M12.6,8.7,11.5,6.5a1.05,1.05,0,0,0-.9-.5H4.4a1.05,1.05,0,0,0-.9.5L2.4,8.7,1.16,9.852a.5.5,0,0,0-.16.367V14.5a.5.5,0,0,0,.5.5h2c.2,0,.5-.2.5-.4V14h7v.5c0,.2.2.5.4.5h2.1a.5.5,0,0,0,.5-.5V10.219a.5.5,0,0,0-.16-.367ZM4.5,7h6l1,2h-8ZM5,11.6c0,.2-.3.4-.5.4H2.4c-.2,0-.4-.3-.4-.5V10.4c.1-.3.3-.5.6-.4l2,.4c.2,0,.4.3.4.5Zm8-.1c0,.2-.2.5-.4.5H10.5c-.2,0-.5-.2-.5-.4v-.7c0-.2.2-.5.4-.5l2-.4c.3-.1.5.1.6.4ZM14,2V3a1.009,1.009,0,0,1-1.017,1H5.348A2.549,2.549,0,0,1,1,3.5H3.5v-2H1A2.549,2.549,0,0,1,5.348,1h7.635A1.009,1.009,0,0,1,14,2Z" /></svg>
                        <span>Tune Up</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MenuServis