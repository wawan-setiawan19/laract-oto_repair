import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
export default function About({ auth, percentage }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="About" />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="px-10">
                        <h1 className="text-5xl font-bold text-center">Tentang Kami Bengkel Go</h1>
                        <p className="mt-2 mb-2">Selamat datang di Bengkel Go!</p>
                        <p className="mt-2 mb-2">Bengkel Go adalah platform digital yang didedikasikan untuk memberikan layanan terbaik dalam dunia otomotif. Kami menyediakan layanan jasa bengkel mobil, penjualan sparepart, oli, dan berbagai layanan terkait lainnya. Platform kami terhubung dengan mitra-mitra bengkel yang handal dan terpercaya di wilayah Purwokerto, Banyumas, dan sekitarnya.</p>
                        <p className="mt-2 mb-2">Dengan Bengkel Go, Anda tidak perlu lagi bingung mencari bengkel yang tepat atau khawatir tentang kualitas layanan. Kami telah mengkategorikan bengkel berdasarkan jenis perbaikan kendaraan, memberikan informasi transparan tentang biaya, dan bahkan memberikan daftar bengkel terdekat dari lokasi Anda. Kami juga menyediakan berbagai produk seperti suku cadang, oli, dan berbagai kebutuhan otomotif lainnya yang dapat Anda beli dengan mudah melalui platform kami.</p>
                        <p className="mt-2 mb-2">Kami bangga menjadi bagian dari komunitas otomotif di Purwokerto dan Banyumas, dan kami selalu berusaha untuk memberikan pengalaman yang lebih baik dalam perawatan dan perbaikan kendaraan Anda. Dengan Bengkel Go, Anda dapat mengandalkan layanan yang cepat, andal, dan efisien.</p>
                        <p className="mt-2 mb-2">Terima kasih telah memilih Bengkel Go sebagai solusi Anda dalam dunia otomotif. Kami berharap dapat memberikan layanan terbaik dan memenuhi semua kebutuhan Anda. Jika Anda memiliki pertanyaan atau memerlukan bantuan, jangan ragu untuk menghubungi tim dukungan kami.</p>
                        <p className="mt-2 mb-2">Selamat menggunakan Bengkel Go, platform otomotif yang selalu siap melayani Anda!</p>
                        <p className="mt-2 mb-2">PENTING!</p>
                        <p className="mt-2 mb-2 font-weight-bold">Peringatan: Tahap Pengembangan</p>
                        <p className="mt-2 mb-2">Kami ingin memberitahukan kepada seluruh pengguna bahwa website Bengkel Go masih dalam tahap pengembangan aktif. Meskipun kami telah berupaya keras untuk memberikan pengalaman yang terbaik, ada kemungkinan bahwa Anda akan mengalami beberapa perubahan dan pembaruan saat menggunakan platform kami.</p>
                        <p className="mt-2 mb-2">Kami meminta pengertian dan kerjasama dari Anda selama proses pengembangan ini. Tim kami sedang bekerja keras untuk memastikan bahwa semua fitur dan layanan kami berfungsi dengan optimal dan memberikan manfaat yang maksimal bagi pengguna kami.</p>
                        <p className="mt-2 mb-2">Selama tahap pengembangan ini, mungkin ada beberapa fitur yang belum sepenuhnya tersedia atau beberapa perbaikan yang sedang kami lakukan. Namun, kami berkomitmen untuk terus meningkatkan dan memperbaiki platform kami agar lebih baik dari sebelumnya.</p>
                        <p className="mt-2 mb-2">Terima kasih atas dukungan Anda dan kesabaran Anda selama kami menjalani tahap pengembangan ini. Jika Anda memiliki masukan atau saran untuk perbaikan, kami sangat menghargainya. Anda dapat menghubungi tim dukungan kami kapan saja.</p>
                        <p className="mt-2 mb-2">Teruslah mengikuti perkembangan kami karena kami berusaha untuk memberikan pengalaman terbaik dalam dunia otomotif. Kami berharap Anda dapat menikmati layanan kami dengan lebih baik di masa depan.</p>
                        <p className="mt-2 mb-2">Terima kasih atas pengertian dan dukungan Anda!</p>
                        <p className="mt-2 mb-2">Salam, <br />Tim Bengkel Go</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}