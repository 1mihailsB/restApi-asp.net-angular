using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RestApi.Models
{
    public class Apartment
    {
        public long Id { get; set; }
        public int Number { get; set; }
        public int Floor { get; set; }
        public int AmountOfRooms { get; set; }
        public int AmountOfTenants { get { return Tenants?.Count ?? 0; } }
        public int TotalArea { get; set; }
        public int AvailableArea { get; set; }
        public long? HouseId { get; set; }
        public House House { get; set; }
        public ICollection<Tenant> Tenants { get; set; }
    }
}
