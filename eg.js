//  let a = "A:BC+DEF:GHI+JK:LM+NO:PQ+RS:TUV+WX:Y+Z:"


// // let b = [["A"] , ["BC" , "DEF"] , ["GHI" , "JK"], ["LM", "NO"]]

// let res = a.split(":").map(val=> val.split("+"))
// //console.log(res);

// const person = [, 
//     { firstName: "reksh1", lastName: "pari1"},
//     { firstName: "reksh2", lastName: "pari2"},
//     { firstName: "reksh3", lastName: "pari3"},
//     { firstName: "reksh4", lastName: "pari4"},
    
// ]

let dat = [
    {
      "Name": "10. Global Services Product",
      "val": "ESATBT_ATT_YESNOText"
    },
    {
      "Name": "10. Services",
      "val": "ESABT_ATTRIB_SERVICESText"
    },
    {
      "Name": "12. Core Network Performance Reports",
      "val": "ESATBT_ATTRIB_PERFORMANCE_MANGText"
    },
    {
      "Name": "12. Proactive Fault Management",
      "val": "ESATBT_ATTRIB_PRO_FAULT_MANGText"
    },
    {
      "Name": "16. CPE Configured",
      "val": "ESATBT_ATT_YESNOText"
    },
    {
      "Name": "16. CPE Maintenance",
      "val": "ESATBT_ATTRIB_CPE_MAINTENANCEText"
    },
    {
      "Name": "16. CPE Performance Reporting",
      "val": "ESATBT_ATTRIB_PERFORMANCE_MANGText"
    },
    {
      "Name": "18. Access Circuit Speed",
      "val": "ESATBT_ATTRIB_SPEEDText"
    },
    {
      "Name": "18. Port Size",
      "val": "ESATBT_ATTRIB_PORT_SIZEText"
    },
    {
      "Name": "20. ESG File Attached",
      "val": "ESATBT_ATT_YESNOBoolean"
    },
    {
      "Name": "20. Is Global Order form (DCA) Attached?",
      "val": "ESATBT_ATT_YESNOBoolean"
    },
    {
      "Name": "22. Class of Service Model",
      "val": "ESATBT_ATTRIB_CLASS_OF_SERVICEText"
    },
    {
      "Name": "26. PVC Type ATM",
      "val": "ESATBT_ATTRIB_PVC_TYPE_ATMText"
    },
    {
      "Name": "30. CIR 1",
      "val": "ESATBT_ATTRIB_CIRText"
    },
    {
      "Name": "30. EIR 1",
      "val": "ESATBT_ATTRIB_EIRText"
    },
    {
      "Name": "30. PCR 1",
      "val": "ESATBT_ATTRIB_PCRText"
    },
    {
      "Name": "30. PVC Number 1",
      "val": "ESATBT_ATTRIB_PVC_NUMBERText"
    },
    {
      "Name": "30. SCR 1",
      "val": "ESATBT_ATTRIB_SCRText"
    },
    {
      "Name": "32. CIR 2",
      "val": "ESATBT_ATTRIB_CIRText"
    },
    {
      "Name": "32. EIR 2",
      "val": "ESATBT_ATTRIB_EIRText"
    },
    {
      "Name": "32. PCR 2",
      "val": "ESATBT_ATTRIB_PCRText"
    },
    {
      "Name": "32. SCR 2",
      "val": "ESATBT_ATTRIB_SCRText"
    },
    {
      "Name": "33. CIR 3",
      "val": "ESATBT_ATTRIB_CIRText"
    },
    {
      "Name": "33. EIR 3",
      "val": "ESATBT_ATTRIB_EIRText"
    },
    {
      "Name": "33. PCR 3",
      "val": "ESATBT_ATTRIB_PCRText"
    },
    {
      "Name": "33. SCR 3",
      "val": "ESATBT_ATTRIB_SCRText"
    },
    {
      "Name": "34. CIR 4",
      "val": "ESATBT_ATTRIB_CIRText"
    },
    {
      "Name": "34. EIR 4",
      "val": "ESATBT_ATTRIB_EIRText"
    },
    {
      "Name": "34. PCR 4",
      "val": "ESATBT_ATTRIB_PCRText"
    },
    {
      "Name": "34. SCR 4",
      "val": "ESATBT_ATTRIB_SCRText"
    },
    {
      "Name": "40. Burstable Bandwidth Tariff (BBT) Required",
      "val": "ESATBT_ATT_YESNOBoolean"
    },
    {
      "Name": "40. IP Address for Network Required",
      "val": "ESATBT_ATT_YESNOBoolean"
    },
    {
      "Name": "40. Minimum Commit in Mbit/s",
      "val": "ESATBT_ATTRIB_MINText"
    },
    {
      "Name": "52. Channelised Delivery",
      "val": "ESATBT_ATT_YESNOBoolean"
    },
    {
      "Name": "54. LAN / SAN Service",
      "val": "ESATBT_ATTRIB_LAN_SAN_SERVICEText"
    },
    {
      "Name": "54. LAN Interface Type (Managed Service Only)",
      "val": "ESATBT_ATTRIB_LAN_INTF_MANGText"
    },
    {
      "Name": "70. MobileXpress",
      "val": "ESAT_ATTRIB_REMOTEINTERNETText"
    },
    {
      "Name": "Additional DDI Block Range",
      "val": "ADD_BLOCK_RANGEText"
    },
    {
      "Name": "Adva Power Option A-End",
      "val": "ESATBT_ADVA_POWERText"
    },
    {
      "Name": "Adva Power Option B-End",
      "val": "ESATBT_ADVA_POWERText"
    },
    {
      "Name": "Authorised Contact 1",
      "val": "Text"
    },
    {
      "Name": "Authorised Contact 2",
      "val": "Text"
    },
    {
      "Name": "CPE Option",
      "val": "ESATBT_ETHERWAY_CPE_OPTION"
    },
    {
      "Name": "EFM SLA",
      "val": "ESATBT_EFM_eSLA"
    },
    {
      "Name": "Etherway SLA",
      "val": "ESATBT_EWAY_SLA"
    },
    {
      "Name": "Exchange Code",
      "val": "ESATBT_ATT_EXCH_CODEText"
    },
    {
      "Name": "Fibre Required",
      "val": "ESATBT_ATT_YESNOText"
    },
    {
      "Name": "01. Project Orders",
      "val": "ESATBT_ATT_YESNOText"
    },
    {
      "Name": "10.  B-End BTI managed",
      "val": "ESATBT_ATT_YESNOText"
    },
    {
      "Name": "22. Global Class of Service Model",
      "val": "ESATBT_ATTRIB_CLASS_OF_SERVICEText"
    },
    {
      "Name": "70. Remote VPN",
      "val": "ESATBT_ATTRIB_REMOTEVPNText"
    },
    {
      "Name": "A End Etherway CPE option",
      "val": "ESATBT_ETHERWAY_CPE_OPTION"
    },
    {
      "Name": "A End Fibre Required",
      "val": "ESATBT_ATT_YESNOText"
    },
    {
      "Name": "Access Product",
      "val": "ESATBT_ACCESS_PRODUCTS"
    },
    {
      "Name": "B End Delivery",
      "val": "ESATBT_ATT_YESNOText"
    },
    {
      "Name": "B End Etherway CPE option",
      "val": "ESATBT_ETHERWAY_CPE_OPTION"
    },
    {
      "Name": "B End Fibre Required",
      "val": "ESATBT_ATT_YESNOText"
    },
    {
      "Name": "Class Of Service",
      "val": "ESATBT_PERF_REPText"
    },
    {
      "Name": "Cloud Connect Service",
      "val": "ESATBT_CLOUD_CONN_SERVText"
    },
    {
      "Name": "Connect Intelligent Service",
      "val": "ESATBT_CI_SERVICE"
    },
    {
      "Name": "DR Plan Name - DONT USE",
      "val": "Text"
    },
    {
      "Name": "Etherflow Reporting",
      "val": "ESATBT_PERF_REPText"
    },
    {
      "Name": "Etherway VLAN or Port A-End",
      "val": "ESATBT_VLAN_PORTText"
    },
    {
      "Name": "Etherway VLAN or Port B-End",
      "val": "ESATBT_VLAN_PORTText"
    },
    {
      "Name": "IHN Product",
      "val": "ESATBT_ATT_YESNOText"
    },
    {
      "Name": "Internet Connect Service",
      "val": "ESATBT_IC_SERVICE"
    },
    {
      "Name": "Lead Time Date Field",
      "val": "ESATBT_LEAD_TIME_DT"
    },
    {
      "Name": "Licenced Channels Required",
      "val": "ESATBT_ATT_YESNOText"
    },
    {
      "Name": "Managed",
      "val": "ESATBT_ATT_YESNOBoolean"
    },
    {
      "Name": "NTE Power Option A-End",
      "val": "ESATBT_ADVA_POWERText"
    },
    {
      "Name": "NTE Power Option B-End",
      "val": "ESATBT_ADVA_POWERText"
    },
    {
      "Name": "Node-B",
      "val": "ESATBT_NODE_BText"
    },
    {
      "Name": "One Voice GSIP type",
      "val": "One Voice GSIP type"
    },
    {
      "Name": "Performance Reporting",
      "val": "ESATBT_ATT_YESNOText"
    },
    {
      "Name": "Project",
      "val": "ESATBT_ATT_YESNOBoolean"
    },
    {
      "Name": "SIP Channel Type",
      "val": "ESATBT_SIP_CHANNEL_TYPE"
    },
    {
      "Name": "VLAN or Port",
      "val": "ESATBT_VLAN_PORTText"
    },
    {
      "Name": "01. Project Orders",
      "val": "ESATBT_ATT_YESNOText"
    },
    {
      "Name": "A End Etherway CPE option",
      "val": "ESATBT_ETHERWAY_CPE_OPTION"
    },
    {
      "Name": "A End Fibre Required",
      "val": "ESATBT_ATT_YESNOText"
    },
    {
      "Name": "B End Etherway CPE option",
      "val": "ESATBT_ETHERWAY_CPE_OPTION"
    },
    {
      "Name": "B End Fibre Required",
      "val": "ESATBT_ATT_YESNOText"
    },
    {
      "Name": "Class Of Service",
      "val": "ESATBT_PERF_REPText"
    },
    {
      "Name": "Etherflow Reporting",
      "val": "ESATBT_PERF_REPText"
    },
    {
      "Name": "Etherway VLAN or Port A-End",
      "val": "ESATBT_VLAN_PORTText"
    },
    {
      "Name": "Etherway VLAN or Port B-End",
      "val": "ESATBT_VLAN_PORTText"
    },
    {
      "Name": "Performance Reporting",
      "val": "ESATBT_ATT_YESNOText"
    },
    {
      "Name": "20. ESG File Attached",
      "val": "ESATBT_ATT_YESNOBoolean"
    },
    {
      "Name": "Additional DDI Block Range",
      "val": "ADD_BLOCK_RANGEText"
    },
    {
      "Name": "Adva Power Option A-End",
      "val": "ESATBT_ADVA_POWERText"
    },
    {
      "Name": "Adva Power Option B-End",
      "val": "ESATBT_ADVA_POWERText"
    },
    {
      "Name": "CPE Option",
      "val": "ESATBT_ETHERWAY_CPE_OPTION"
    },
    {
      "Name": "EFM SLA",
      "val": "ESATBT_EFM_eSLA"
    },
    {
      "Name": "Etherway SLA",
      "val": "ESATBT_EWAY_SLA"
    },
    {
      "Name": "Exchange Code",
      "val": "ESATBT_ATT_EXCH_CODEText"
    },
    {
      "Name": "80. MM Messaging",
      "val": "Date"
    },
    {
      "Name": "40. Excess Charge per Mbit/s",
      "val": "Number"
    },
    {
      "Name": "70. CID (Customer ID)",
      "val": "Number"
    }
   ]
   
   let ans = dat.map(ele => {
   
   let x = {
       id: ele.Name,
       url: "read",
       optionValue: "code",
       optionName: "name",
       body: {
         ref: "picklist",
         attributes: ["id", "code", "name"],
         condition: [{ key: "type", value: ele.val}],
         limit: "100",
       },
     }
     return x
    // console.log(JSON.stringify(x))
           
   })
   console.log(JSON.stringify(ans))









