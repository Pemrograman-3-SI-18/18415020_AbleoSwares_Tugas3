<template>
<q-page>
 <div class="q-pa-md">
    <q-table
      title="`Treats"
      :data="data"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
    >

      <template v-slot:top>
        <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Data Transaksi</span>
        </span>
        <!-- <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> -->
        <q-space />
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>
  </div>
</q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.kodeTransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namaPembeli', align: 'center', label: 'Nama Pembeli', field: 'namaPembeli', sortable: true },
        { name: 'judulBuku', align: 'center', label: 'Judul Buku', field: 'judulBuku', sortable: true },
        { name: 'harga', align: 'center', label: 'Harga', field: 'harga' },
        { name: 'total', align: 'center', label: 'Total Pembelian', field: 'total' }
      ],
      data: [
        {
          kodeTransaksi: 'K001',
          namaPembeli: 'Dwi Novendra',
          judulBuku: 'Pemograman 3',
          harga: 'Rp.100.000',
          total: '1'
        },
        {
          kodeTransaksi: 'K002',
          namaPembeli: 'Roby Ortega',
          judulBuku: 'Praktek Pemrograman',
          harga: 'Rp.250.000',
          total: '1'
        },
        {
          kodeTransaksi: 'K003',
          namaPembeli: 'Yoga Saputra',
          judulBuku: 'Pemrograman Web',
          harga: 'Rp.200.000',
          total: '1'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
