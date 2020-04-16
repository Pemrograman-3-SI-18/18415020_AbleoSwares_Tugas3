<template>
 <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
    >

      <template v-slot:top>
        <q-btn color="primary" :disable="loading" label="Tambah Data Buku"/>
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
          label: 'Kode Buku',
          align: 'left',
          field: row => row.kodeBuku,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'judulBuku', align: 'center', label: 'Judul Buku', field: 'judulBuku', sortable: true },
        { name: 'penerbit', align: 'center', label: 'Penerbit', field: 'penerbit', sortable: true },
        { name: 'pengarang', align: 'center', label: 'Pengarang', field: 'pengarang' },
        { name: 'tahunTerbit', align: 'center', label: 'Tahun Terbit', field: 'tahunTerbit' }
      ],
      data: [
        {
          kodeBuku: 'K001',
          judulBuku: 'Berkata Saja',
          penerbit: 'Dunia Buku',
          pengarang: 'Abelo',
          tahunTerbit: '2019'
        },
        {
          kodeBuku: 'K002',
          judulBuku: 'Hari ini',
          penerbit: 'Dunia Buku',
          pengarang: 'Abelo',
          tahunTerbit: '2018'
        },
        {
          kodeBuku: 'K003',
          judulBuku: 'Selamat Malam',
          penerbit: 'Dunia Buku',
          pengarang: 'Abelo',
          tahunTerbit: '2017'
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
