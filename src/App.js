import './styles.css'

import { Table } from './Table'

export default function App() {
  const columns = [
    { accessor: 'data', label: 'Дата' },
    { accessor: 'name', label: 'Название' },
    {accessor: 'amount', label: 'Количество'},
    {accessor: 'distance', label: 'Расстояние'},
  
    
  ]


  const rows = [
    { id: 0, data: '20.03.2022', name: 'Перевозка', amount: '1000 т', distance: '100 км',
  },
  { id: 0, data: '20.05.2022', name: 'Грузо перевозка', amount: '900 т', distance: '70 км',
  },
  { id: 0, data: '20.03.2022', name: 'Перевозка', amount: '7000 т', distance: '100 км',
},
{ id: 0, data: '20.05.2022', name: 'Грузо перевозка', amount: '1100 т', distance: '70 км',
},
{ id: 0, data: '20.03.2022', name: 'Перевозка', amount: '8000 т', distance: '100 км',
},
{ id: 0, data: '20.05.2022', name: 'Грузо перевозка', amount: '800 т', distance: '70 км',
},
{ id: 0, data: '20.03.2022', name: 'Перевозка', amount: '1200 т', distance: '100 км',
},
{ id: 0, data: '20.05.2022', name: 'Грузо перевозка', amount: '9000 т', distance: '70 км',
},
{ id: 0, data: '20.03.2021', name: 'Перевозка', amount: '200 т', distance: '100 км',
},
{ id: 0, data: '20.05.2022', name: 'Грузо перевозка', amount: '900 т', distance: '70 км',
},
    
  ]

  return (
    <div className="App">
      <h1>Table</h1>

      <Table rows={rows} columns={columns} />
    </div>
  )
}
