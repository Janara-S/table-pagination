import './styles.css'

import { Table } from './Table'

export default function App() {
  const columns = [
    { accessor: 'code', label: 'Код' },
    { accessor: 'name', label: 'Исследование' },
    {accessor: 'biomaterialName', label: 'Биомат',  format: (value) => (value ? '✔️' : '✖️')},
    {accessor: 'typeName', label: 'Тип услуги'},
    {accessor: 'researchPriceId', label: 'Исследование PriceId'},
    {accessor: 'researchId', label: 'Id'},
    {accessor: 'currencyName', label: 'Название валюты'},
    {accessor: 'price', label: 'Цена'},
  
    
  ]


  const rows = [
    { id: 0, code: '01-002', name: 'Кровь. Общий анализ крови(ОАК)', biomaterialName: 'true', typeName: 'Анализ', researchPriceId:  1898881, researchId: 6037, currencyName: 'Тенге', price:20000,
  },
    { id: 0, code: '01-002', name: 'Кровь. LE-клетки. Кровь с чего то там', biomaterialName: 'false', typeName: 'Аналаз', researchPriceId:  1898881, researchId: 6037, currencyName: 'Тенге', price:20000,
},
{ id: 0, code: '01-092', name: 'Моча. 17КС. Моча утренняя', biomaterialName: 'true', typeName: 'Аналаз', researchPriceId:  1859481, researchId: 3437, currencyName: 'Тенге', price:10000,
},
{ id: 0, code: '01-092', name: 'Кал на скрытую кровь', biomaterialName: 'false', typeName: 'Аналаз', researchPriceId:  8459481, researchId: 3439, currencyName: 'Тенге', price:10000,
},
{ id: 0, code: '01-092', name: 'Дифференциальная диагностика гранулезоклеточных опухолей', biomaterialName: 'false', typeName: 'Аналаз', researchPriceId:  8459481, researchId: 3439, currencyName: 'Тенге', price:10000,
},
{ id: 0, code: '01-092', name: 'Фторпиримидины', biomaterialName: 'true', typeName: 'Аналаз', researchPriceId:  8459481, researchId: 3439, currencyName: 'Тенге', price:50000,
},
{ id: 0, code: '01-092', name: 'Дифференциальная диагностика гранулезоклеточных опухолей', biomaterialName: 'true', typeName: 'Аналаз', researchPriceId:  8459481, researchId: 3439, currencyName: 'Тенге', price:10000,
},
{ id: 0, code: '01-092', name: 'Фторпиримидины', biomaterialName: 'true', typeName: 'Аналаз', researchPriceId:  8459481, researchId: 3439, currencyName: 'Тенге', price:50000,
},
{ id: 0, code: '01-092', name: 'Дифференциальная диагностика гранулезоклеточных опухолей', biomaterialName: 'true', typeName: 'Аналаз', researchPriceId:  8459481, researchId: 3439, currencyName: 'Тенге', price:10000,
},
{ id: 0, code: '01-092', name: 'Фторпиримидины', biomaterialName: 'true', typeName: 'Аналаз', researchPriceId:  8459481, researchId: 3439, currencyName: 'Тенге', price:50000,
},
    
  ]

  return (
    <div className="App">
      <h1>Table</h1>

      <Table rows={rows} columns={columns} />
    </div>
  )
}
