let ary1 = [
    { key: 'A', value: 'a', checked: true },
    { key: 'A', value: 'b', checked: true },
    { key: 'A', value: 'c', checked: true },
    { key: 'B', value: 'a', checked: true },
    { key: 'B', value: 'b', checked: true }
]

let obj = {}
ary1.forEach((arr) => {
     if (!obj[arr['key']] ) obj[arr['key']] = []
    let subObj = {}
    Object.keys(arr).forEach((key) => {
        if (key !== 'key') {
            subObj[key] = arr[key]
        }
    })
    obj[arr['key']].push(subObj)

})

let ary2 =[]
Object.keys(obj).forEach((o) => {
	let a = {}

	a['key'] = o
	a['details'] = obj[o]
	ary2.push(a)
})
console.dir(ary2);