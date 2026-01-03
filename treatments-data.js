// Treatment Data untuk Gloglowing Aesthetic Clinic
// File ini berisi semua data treatment yang dapat di-load ke website

const treatmentsData = {
    categories: [
        {
            id: 'facial-glowing',
            name: 'FACIAL GLOWING',
            treatments: [
                { name: 'Facial Glowing + Sinar Uap', originalPrice: 255000, price: 120000, image: 'images/treatments/facial-glowing-1.jpg' },
                { name: 'Facial Bubble Collagen', originalPrice: 470000, price: 299000, image: 'images/treatments/facial-bubble.jpg' },
                { name: 'Facial Glowing Detox Premium', originalPrice: 210000, price: 185000, image: 'images/treatments/facial-detox.jpg' },
                { name: 'Facial Oxygen Glowing', originalPrice: 370000, price: 250000, image: 'images/treatments/facial-oxygen.jpg' }
            ]
        },
        {
            id: 'super-facial',
            name: 'GLOGLOWING SUPER FACIAL',
            treatments: [
                { name: 'Plasma Pen for Acne Bacteria', originalPrice: 470000, price: 299000, image: 'images/treatments/plasma-pen.jpg' },
                { name: 'Hollywood Peel White Glowing', originalPrice: 470000, price: 299000, image: 'images/treatments/hollywood-peel.jpg' },
                { name: 'Facial RF Lifting Anti-Aging dan Kantung Mata', originalPrice: 470000, price: 299000, image: 'images/treatments/rf-lifting.jpg' },
                { name: 'Oxygeneo Ultra Facial Super Whitening Glowing', originalPrice: 640000, price: 425000, image: 'images/treatments/oxygeneo.jpg' }
            ]
        },
        {
            id: 'paket-khusus',
            name: 'PAKET KHUSUS',
            treatments: [
                { name: 'Facial Luxury Glowing + Skincare', originalPrice: 470000, price: 250000, image: 'images/treatments/luxury-glowing.jpg' },
                { name: 'Chemical Peeling Eropa + Skincare', originalPrice: 640000, price: 500000, image: 'images/treatments/chemical-peeling.jpg' },
                { name: 'Paket Dijamin Glowing', originalPrice: 2400000, price: 1500000, image: 'images/treatments/paket-glowing.jpg' },
                { name: 'Paket Dijamin Tirus', originalPrice: 2350000, price: 1400000, image: 'images/treatments/paket-tirus.jpg' },
                { name: 'Paket Dijamin Acne Hilang', originalPrice: 3399000, price: 2500000, image: 'images/treatments/paket-acne.jpg' }
            ]
        }
        // Tambahkan kategori lainnya sesuai data yang diberikan
        // Total ada sekitar 20+ kategori dengan 100+ treatment
    ]
};

// Fungsi untuk format harga
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
}

