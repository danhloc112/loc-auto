import car1 from '../image/car-service-1.svg'
import car2 from '../image/car-service-2.svg'
import car3 from '../image/car-service-3.svg'
import car4 from '../image/car-service-4.svg'

export const option = [
    {
        value: "Toyota",
        label: "Toyota",
        children:[
            {
                value: "Vios",
                label: "Vios",
                children: [
                    {
                        value: "2010",
                        label: "2010",
                    },
                    {
                        value: "2011",
                        label: "2011",
                    }
                ]
            },
            {
                value: "Fortuner",
                label: "Fortuner",
                children: [
                    {
                        value: "2010",
                        label: "2010",
                    },
                    {
                        value: "2011",
                        label: "2011",
                    }
                ]
            }
        ]
    },
    {
        value: "Mercedes",
        label: "Mercedes",
        children:[
            {
                value: "C200",
                label: "C200",
                children: [
                    {
                        value: "2010",
                        label: "2010",
                    },
                    {
                        value: "2011",
                        label: "2011",
                    }
                ]
            }
        ]
    },
    {
        value: "Honda",
        label: "Honda",
        children:[
            {
                value: "City",
                label: "City",
                children: [
                    {
                        value: "2010",
                        label: "2010",
                    },
                    {
                        value: "2011",
                        label: "2011",
                    }
                ]
            },
            {
                value: "CRV",
                label: "CRV",
                children: [
                    {
                        value: "2010",
                        label: "2010",
                    },
                    {
                        value: "2011",
                        label: "2011",
                    }
                ]
            }
        ]
    },
    {
        value: "Mazda",
        label: "Mazda",
        children:[
            {
                value: "Mazda 3",
                label: "Mazda 3",
                children: [
                    {
                        value: "2010",
                        label: "2010",
                    },
                    {
                        value: "2011",
                        label: "2011",
                    }
                ]
            },
            {
                value: "CX-5",
                label: "CX-5",
                children: [
                    {
                        value: "2010",
                        label: "2010",
                    },
                    {
                        value: "2011",
                        label: "2011",
                    }
                ]
            }
        ]
    },
    {
        value: "Hyundai",
        label: "Hyundai",
        children:[
            {
                value: "i10",
                label: "i10",
                children: [
                    {
                        value: "2010",
                        label: "2010",
                    },
                    {
                        value: "2011",
                        label: "2011",
                    }
                ]
            }
        ]
    }
]




export const options = [
    {
      title:'Giao xe t???n nh??',
      delay: 100,
      url: car1,
      id: 1
    },
    {
      title: 'Nhi???t t??nh, chu ????o',
      delay: 200,
      url: car2,
      id: 2
     },
     { 
       title: '?????m b???o ch???t l?????ng',
       delay: 300,
       url: car3,
      id: 3
      },
      {
        title: 'Th??? t???c ????n gi???n, nhanh ch??ng',
        delay: 400,      
        url: car4,
        id: 4
      }]