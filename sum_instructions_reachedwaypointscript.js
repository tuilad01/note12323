 document.getElementById("calculate-routing-button").addEventListener('click', function () {
        console.log('markers', markers)
        const control = L.Routing.control({
          waypoints: [
            ...markers.map(d => d.getLatLng())
          ]
        })

        control.addEventListener('routesfound', function(e) {
          console.log('event', e)
          const route = e.routes[0]
          if (!route) {
            return;
          }
          console.log('totalDistance', route.summary.totalDistance);
          const sumAll = route.instructions.reduce((accumulator, object) => accumulator + object.distance, 0)

          console.log('sum all', sumAll);


          const reachedIndex = route.instructions.findIndex(d => d.type === 'WaypointReached')
          const sum = route.instructions.splice(0, reachedIndex + 1).reduce((accumulator, object) => accumulator + object.distance, 0)
          console.log('sum reached way point', sum)

          
        })

        control.addTo(map)

      })
