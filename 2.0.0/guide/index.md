## detect zoom

### 使用

``` javascript

	KISSY.use('kg/detect-zoom/2.0.0/',function(S, detectZoom){
		if(detectZoom){
			S.log(detectZoom());
		}
	});
	
```
	
	
该模块在支持的浏览器上是一个函数，执行后返回一个对象包含两个属性，在不支持的浏览器上是 null

#### zoom

{Number} 页面缩放的比例

#### devicePxPerCssPx

{Number} 每一个 css 像素对应的物理像素数