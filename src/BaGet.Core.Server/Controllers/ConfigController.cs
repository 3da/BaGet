using System;
using System.Collections.Generic;
using System.Text;
using BaGet.Core.Configuration;
using BaGet.Extensions;
using BaGet.Protocol;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace BaGet.Core.Server.Controllers
{
    public class ConfigController : Controller
    {
        private readonly IOptionsSnapshot<BaGetOptions> _options;

        public ConfigController(IOptionsSnapshot<BaGetOptions> options)
        {
            _options = options;
        }

        public ClientSideOptions Get()
        {
            return _options.Value.ClientSideOptions;
        }
    }
}
