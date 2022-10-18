var scatterChartCtx = document.getElementById('scatterChart').getContext('2d')
var barChartCtx = document.getElementById('barChart').getContext('2d')
var pieChartCtx = document.getElementById("pieChart").getContext('2d')
var donutChartCtx = document.getElementById("donutChart").getContext('2d')

data2 = [
  {
    "tahun": 2007,
    "jenis_komoditi": "Padi",
    "luas_panen": 1544,
    "satuan_luas": "Ha",
    "jumlah_produksi": 8002,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2008,
    "jenis_komoditi": "Padi",
    "luas_panen": 1640,
    "satuan_luas": "Ha",
    "jumlah_produksi": 8352,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2009,
    "jenis_komoditi": "Padi",
    "luas_panen": 1974,
    "satuan_luas": "Ha",
    "jumlah_produksi": 11013,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2010,
    "jenis_komoditi": "Padi",
    "luas_panen": 2015,
    "satuan_luas": "Ha",
    "jumlah_produksi": 11164,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2011,
    "jenis_komoditi": "Padi",
    "luas_panen": 1223,
    "satuan_luas": "Ha",
    "jumlah_produksi": 9516,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2012,
    "jenis_komoditi": "Padi",
    "luas_panen": 1897,
    "satuan_luas": "Ha",
    "jumlah_produksi": 11044,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2013,
    "jenis_komoditi": "Padi",
    "luas_panen": 1744,
    "satuan_luas": "Ha",
    "jumlah_produksi": 10268,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2007,
    "jenis_komoditi": "Jagung",
    "luas_panen": 20,
    "satuan_luas": "Ha",
    "jumlah_produksi": 39,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2008,
    "jenis_komoditi": "Jagung",
    "luas_panen": 20,
    "satuan_luas": "Ha",
    "jumlah_produksi": 39,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2009,
    "jenis_komoditi": "Jagung",
    "luas_panen": 16,
    "satuan_luas": "Ha",
    "jumlah_produksi": 32,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2010,
    "jenis_komoditi": "Jagung",
    "luas_panen": 15,
    "satuan_luas": "Ha",
    "jumlah_produksi": 31,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2011,
    "jenis_komoditi": "Jagung",
    "luas_panen": 12,
    "satuan_luas": "Ha",
    "jumlah_produksi": 23,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2012,
    "jenis_komoditi": "Jagung",
    "luas_panen": 3,
    "satuan_luas": "Ha",
    "jumlah_produksi": 6,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2013,
    "jenis_komoditi": "Jagung",
    "luas_panen": null,
    "satuan_luas": "Ha",
    "jumlah_produksi": null,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2007,
    "jenis_komoditi": "Ubi Kayu",
    "luas_panen": null,
    "satuan_luas": "Ha",
    "jumlah_produksi": null,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2008,
    "jenis_komoditi": "Ubi Kayu",
    "luas_panen": null,
    "satuan_luas": "Ha",
    "jumlah_produksi": null,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2009,
    "jenis_komoditi": "Ubi Kayu",
    "luas_panen": 26,
    "satuan_luas": "Ha",
    "jumlah_produksi": 305,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2010,
    "jenis_komoditi": "Ubi Kayu",
    "luas_panen": 25,
    "satuan_luas": "Ha",
    "jumlah_produksi": 290,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2011,
    "jenis_komoditi": "Ubi Kayu",
    "luas_panen": 15,
    "satuan_luas": "Ha",
    "jumlah_produksi": 176,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2012,
    "jenis_komoditi": "Ubi Kayu",
    "luas_panen": 4,
    "satuan_luas": "Ha",
    "jumlah_produksi": 46,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2013,
    "jenis_komoditi": "Ubi Kayu",
    "luas_panen": null,
    "satuan_luas": "Ha",
    "jumlah_produksi": null,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2007,
    "jenis_komoditi": "Ketela Pohon",
    "luas_panen": 54,
    "satuan_luas": "Ha",
    "jumlah_produksi": 628,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2008,
    "jenis_komoditi": "Ketela Pohon",
    "luas_panen": 39,
    "satuan_luas": "Ha",
    "jumlah_produksi": 454,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2009,
    "jenis_komoditi": "Ketela Pohon",
    "luas_panen": 26,
    "satuan_luas": "Ha",
    "jumlah_produksi": 305,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2010,
    "jenis_komoditi": "Ketela Pohon",
    "luas_panen": 25,
    "satuan_luas": "Ha",
    "jumlah_produksi": 290,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2011,
    "jenis_komoditi": "Ketela Pohon",
    "luas_panen": 15,
    "satuan_luas": "Ha",
    "jumlah_produksi": 176,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2012,
    "jenis_komoditi": "Ketela Pohon",
    "luas_panen": null,
    "satuan_luas": "Ha",
    "jumlah_produksi": null,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2013,
    "jenis_komoditi": "Ketela Pohon",
    "luas_panen": null,
    "satuan_luas": "Ha",
    "jumlah_produksi": null,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2007,
    "jenis_komoditi": "Kacang Tanah",
    "luas_panen": 18,
    "satuan_luas": "Ha",
    "jumlah_produksi": 18,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2008,
    "jenis_komoditi": "Kacang Tanah",
    "luas_panen": 17,
    "satuan_luas": "Ha",
    "jumlah_produksi": 17,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2009,
    "jenis_komoditi": "Kacang Tanah",
    "luas_panen": 9,
    "satuan_luas": "Ha",
    "jumlah_produksi": 9,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2010,
    "jenis_komoditi": "Kacang Tanah",
    "luas_panen": 9,
    "satuan_luas": "Ha",
    "jumlah_produksi": 10,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2011,
    "jenis_komoditi": "Kacang Tanah",
    "luas_panen": 7,
    "satuan_luas": "Ha",
    "jumlah_produksi": 7,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2012,
    "jenis_komoditi": "Kacang Tanah",
    "luas_panen": 1,
    "satuan_luas": "Ha",
    "jumlah_produksi": 1,
    "satuan_produksi": "Ton"
  },
  {
    "tahun": 2013,
    "jenis_komoditi": "Kacang Tanah",
    "luas_panen": null,
    "satuan_luas": "Ha",
    "jumlah_produksi": null,
    "satuan_produksi": "Ton"
  }
]

data = [
  {
    "wilayah": "jakarta utara",
    "komoditi": "beras kualitas sedang",
    "harga_per_satuan": 11335,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta selatan",
    "komoditi": "beras kualitas sedang",
    "harga_per_satuan": 10450,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta barat",
    "komoditi": "beras kualitas sedang",
    "harga_per_satuan": 11393,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta timur",
    "komoditi": "beras kualitas sedang",
    "harga_per_satuan": 9848,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta pusat",
    "komoditi": "beras kualitas sedang",
    "harga_per_satuan": 12265,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta utara",
    "komoditi": "daging sapi",
    "harga_per_satuan": 105673,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta selatan",
    "komoditi": "daging sapi",
    "harga_per_satuan": 105000,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta barat",
    "komoditi": "daging sapi",
    "harga_per_satuan": 120000,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta timur",
    "komoditi": "daging sapi",
    "harga_per_satuan": 117935,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta pusat",
    "komoditi": "daging sapi",
    "harga_per_satuan": 112292,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta utara",
    "komoditi": "gula",
    "harga_per_satuan": 11500,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta selatan",
    "komoditi": "gula",
    "harga_per_satuan": 12795,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta barat",
    "komoditi": "gula",
    "harga_per_satuan": 11223,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta timur",
    "komoditi": "gula",
    "harga_per_satuan": 11018,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta pusat",
    "komoditi": "gula",
    "harga_per_satuan": 12250,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta utara",
    "komoditi": "cabe",
    "harga_per_satuan": 24481,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta selatan",
    "komoditi": "cabe",
    "harga_per_satuan": 25334,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta barat",
    "komoditi": "cabe",
    "harga_per_satuan": 21970,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta timur",
    "komoditi": "cabe",
    "harga_per_satuan": 23577,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta pusat",
    "komoditi": "cabe",
    "harga_per_satuan": 24491,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta utara",
    "komoditi": "bawang merah",
    "harga_per_satuan": 30462,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta selatan",
    "komoditi": "bawang merah",
    "harga_per_satuan": 31631,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta barat",
    "komoditi": "bawang merah",
    "harga_per_satuan": 33261,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta timur",
    "komoditi": "bawang merah",
    "harga_per_satuan": 29499,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta pusat",
    "komoditi": "bawang merah",
    "harga_per_satuan": 28116,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta utara",
    "komoditi": "minyak goreng",
    "harga_per_satuan": 11308,
    "satuan": "Liter"
  },
  {
    "wilayah": "jakarta selatan",
    "komoditi": "minyak goreng",
    "harga_per_satuan": 12027,
    "satuan": "Liter"
  },
  {
    "wilayah": "jakarta barat",
    "komoditi": "minyak goreng",
    "harga_per_satuan": 11750,
    "satuan": "Liter"
  },
  {
    "wilayah": "jakarta timur",
    "komoditi": "minyak goreng",
    "harga_per_satuan": 11215,
    "satuan": "Liter"
  },
  {
    "wilayah": "jakarta pusat",
    "komoditi": "minyak goreng",
    "harga_per_satuan": 11500,
    "satuan": "Liter"
  },
  {
    "wilayah": "jakarta utara",
    "komoditi": "daging ayam",
    "harga_per_satuan": 28039,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta selatan",
    "komoditi": "daging ayam",
    "harga_per_satuan": 34965,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta barat",
    "komoditi": "daging ayam",
    "harga_per_satuan": 29718,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta timur",
    "komoditi": "daging ayam",
    "harga_per_satuan": 25083,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta pusat",
    "komoditi": "daging ayam",
    "harga_per_satuan": 28000,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta utara",
    "komoditi": "telur",
    "harga_per_satuan": 19116,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta selatan",
    "komoditi": "telur",
    "harga_per_satuan": 19256,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta barat",
    "komoditi": "telur",
    "harga_per_satuan": 19457,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta timur",
    "komoditi": "telur",
    "harga_per_satuan": 20123,
    "satuan": "Kg"
  },
  {
    "wilayah": "jakarta pusat",
    "komoditi": "telur",
    "harga_per_satuan": 20077,
    "satuan": "Kg"
  }
]

const scatterChart = new Chart(scatterChartCtx, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Jumlah Produksi Komoditi Padi (Ton)',
      data: [
        { x: 2007, y: 8002 },
        { x: 2008, y: 8352 },
        { x: 2009, y: 11013 },
        { x: 2010, y: 11164 },
        { x: 2011, y: 9516 },
        { x: 2012, y: 11044 },
        { x: 2013, y: 10268 },
      ],
      pointRadius: 5,
      pointBackgroundColor: "rgb(0,0,255)",
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Scatter Chart Komoditi Produksi Padi"
      }
    },
    scales: {
      x: {
        type: 'category',
        labels: [2007, 2008, 2009, 2010, 2011, 2012, 2013],
        position: 'bottom'
      }
    },
  }
})

const barChart = new Chart(barChartCtx, {
  type: 'bar',
  data: {
    labels: ['Jakarta Utara',  'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Pusat'],
    datasets: [{
      label: 'harga Beras (Liter)',
      data: [11335, 10450, 11393, 9848, 12265],
      backgroundColor: [
        'rgb(255, 99, 132)'
      ],
      borderColor: [
        'rgb(255, 99, 132)'
      ],
      borderWidth: 1
    },
    {
      label: 'Harga Gula (Kg)',
      data: [11500, 12795, 11223, 11018, 12250],
      backgroundColor: [
        'rgb(54, 162, 235)'
      ],
      borderColor: [
        'rgb(54, 162, 235)'
      ],
      borderWidth: 1
    },
    {
      label: 'Harga Minyak Goreng (Liter)',
      data: [11308, 12027, 11750, 11215,11500],
      backgroundColor: [
        'rgb(255, 205, 86)'
      ],
      borderColor: [
        'rgb(255, 205, 86)'
      ],
      borderWidth: 1
    }],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    plugins: {
      title: {
        display: true,
        text: "Bar Chart Harga Komoditi di Provinsi Jakarta (Rp)"
      }
    },
  }
})


const pieChart = new Chart(pieChartCtx, {
  type: "pie",
  data: {
    labels:[
      "Jakarta Utara",
      "Jakarta Selatan",
      "Jakarta Barat",
      "Jakarta Timur",
      "Jakarta Pusat"
    ],
    datasets: [{
      data:[120,160,200,158,175],
      backgroundColor: [
        "rgba(250,235,215)",
        "rgba(255,105,180)",
        "rgba(0,255,255)",
        "rgba(0,255,0)",
        "rgba(255,165,0)"
      ]
    }],
  },
  options: {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Pie Chart total Komoditi Daging di Provinsi Jakarta (Ton)"
      }
    },
  }
})

const donutChart = new Chart(donutChartCtx, {
  type: "doughnut",
  data: {
    labels:[
      "Jakarta Utara",
      "Jakarta Selatan",
      "Jakarta Barat",
      "Jakarta Timur",
      "Jakarta Pusat"
    ],
    datasets: [{
      data:[2421, 4934, 3970, 5177, 991],
      backgroundColor: [
        "rgba(255,160,122)",
        "rgba(218,165,32)",
        "rgba(100,149,237)",
        "rgba(186,85,211)",
        "rgba(255,222,173)"
      ]
    }]
  }, 
  options: {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Donut Chart total Komoditi Cabe di Provinsi Jakarta (Kg)"
      }
    },
  }
})
