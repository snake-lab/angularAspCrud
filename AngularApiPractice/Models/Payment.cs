using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApiPractice.Models
{
    public class Payment
    {
        [Key]
        public int PaymentId { get; set; }
        public string BuyerName { get; set; }
        public float Amount { get; set; }
        public Contact Contacts { get; set; }
        [ForeignKey("Contacts")]
        public int ContactId { get; set; }
    }
}
