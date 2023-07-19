import { Component } from '@angular/core';

@Component({
  selector: 'app-proje-goruntu',
  templateUrl: './proje-goruntu.component.html',
  styleUrls: ['./proje-goruntu.component.scss']
})
export class ProjeGoruntuComponent {
bom:any[]=[
 
]


  data: any[] = [
    {
    "urunKod":"10100205-1",
    "cari":"aselsan","aciksiparis":4000,
    "ay":"TEMMUZ",
    "kontrolVar":true,
    "hedef":400,
    "gercek":500
    },
    {
        "urunKod":"10100205-1",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"AĞUSTOS",
        "kontrolVar":true,
        "hedef":400,
        "gercek":0
    
    }
    ,
    {
        "urunKod":"10100205-1",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"EYLÜL",
        "kontrolVar":true,
        "hedef":400,
        "gercek":0
    
    }
    ,
    {
        "urunKod":"10100205-1",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"EKİM",
        "kontrolVar":true,
        "hedef":400,
        "gercek":0
    
    }
    ,
    {
        "urunKod":"10100205-1",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"KASIM",
        "hedef":400,
        "kontrolVar":true,
        "gercek":400
    
    },
    {
        "urunKod":"10100205-1",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"ARALIK",
        "kontrolVar":true,
        "hedef":400,
        "gercek":0
    
    },
    {
        "urunKod":"10100205-2",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"AĞUSTOS",
        "kontrolVar":true,
        "hedef":100,
        "gercek":0
    
    } ,
     {
        "urunKod":"10100205-2",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"EYLÜL",
        "hedef":100,
        "kontrolVar":true,
        "gercek":0
    
    },  {
        "urunKod":"10100205-2",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"EKİM",
        "kontrolVar":true,
        "hedef":100,
        "gercek":0
    
    },  {
        "urunKod":"10100205-2",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"KASIM",
        "kontrolVar":true,
        "hedef":100,
        "gercek":0
    
    },  {
        "urunKod":"10100205-2",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"ARALIK",
        "hedef":100,
        "kontrolVar":true,
        "gercek":0
    
    },  {
        "urunKod":"10100205-2",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"TEMMUZ",
        "kontrolVar":true,
        "hedef":100,
        "gercek":0
    
    },  {
        "urunKod":"10119455-1",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"AĞUSTOS",
        "kontrolVar":false,
        "hedef":100,
        "gercek":0
    
    },  {
        "urunKod":"10119455-1",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"TEMMUZ",
        "kontrolVar":false,
        "hedef":100,
        "gercek":0
    
    },  {
        "urunKod":"10119455-1",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"EYLÜL",
        "hedef":100,
        "kontrolVar":false,
        "gercek":0
        
    
    },  {
        "urunKod":"10119455-1",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"EKİM",
        "hedef":100,
        "kontrolVar":false,
        "gercek":0
    
    },  {
        "urunKod":"10119455-1",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"KASIM",
        "kontrolVar":true,
        "hedef":100,
        "gercek":0
    
    },  {
        "urunKod":"10119455-15",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"AĞUSTOS",
        "kontrolVar":false,
        "hedef":1000,
        "gercek":0
    
    },  {
        "urunKod":"10119455-15",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"KASIM",
        "kontrolVar":false,
        "hedef":1000,
        "gercek":0
    
    },  {
        "urunKod":"10119455-15",
        "cari":"aselsan","aciksiparis":4000,
        "ay":"ARALIK",
        "kontrolVar":false,
        "hedef":1000,
        "gercek":0
    
    }
];

urunKodlari: string[] = [];
aylar: string[] = [];

constructor() { }

ngOnInit() {
  this.urunKodlari = Array.from(new Set(this.data.map(item => item.urunKod)));
  this.aylar = Array.from(new Set(this.data.map(item => item.ay)));
}

getMiktar(urunKod: string, ay: string, tip: string): number | null {
  const item = this.data.find(d => d.urunKod === urunKod && d.ay === ay);
  return item ? item[tip] : null;
}
getKontrolVar(urunKod: string, ay: string): boolean | null {
  const item = this.data.find(d => d.urunKod === urunKod && d.ay === ay);
  return item ? item.kontrolVar : null;
}
getStyle(urunKod: string, ay: string, tip: string): any {
  const miktar = this.getMiktar(urunKod, ay, tip);
  const kontrolVar = this.getKontrolVar(urunKod, ay);
  
  if (miktar !== null && kontrolVar !== null) {
    if (kontrolVar) {
      if (tip === 'hedef') {
        return {
          'font-size': '14px',
          'color': 'green'
        };
      } else if (tip === 'gercek') {
        const hedefMiktar = this.getMiktar(urunKod, ay, 'hedef');
        if (hedefMiktar !== null && miktar < hedefMiktar) {
          return {
            'font-size': '11px',
            'color': 'red'
          };
        } else {
          return {
            'font-size': '11px',
            'color': 'green'
          };
        }
      }
    } else {
      return {
        'font-size': '14px',
        'color': '#ff7f00'
      };
    }
  }
  
  return {
    'font-size': '14px',
    'color': 'black'
  };
}
}